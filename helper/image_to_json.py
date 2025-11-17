from PIL import ExifTags,Image
from util import get_filenames_in_folder
from mappify_at import mappify_AT
import json

"""this is the static version of the utility I made to strip metadata from images.
It by default goes through all images in the folder "source", and strips takes all the data,
returning it in a json. I'm adding it here both for other people to use, and so that I can easily add pictures
"""

class image_to_json():
    """
    takes the import data from a folder and exports the metadata as a JSON.
    """
    def __init__(self,import_path,export_path):
        """
        Arguments:
            import_path : the path to the folder (either relative or absolute) to take the files from
            export_path : the place to put a JSON file named "Export.py" with the metadata
        
        """
        self.import_path = import_path
        self.except_path = export_path
        self.mappify_at = mappify_AT()

    def _get_list_of_photos(self) -> list:
        """
        Returns
            A list of file names at the path specified as import path
        """
        return get_filenames_in_folder(self.import_path)

    def _get_lat_lon_from_photo(self,photo_path):
        """
        A helper function which takes a photo path as its argument, and returns a tuple with the latitude and Longitude

        Parameters:
            photo_path - The absolute or relative path of the photo

        
        """
        img = Image.open(photo_path)
        exif_data = img._getexif()
        converted_data  = {}
        if exif_data is None:
            print('Sorry, image has no exif data.')
        else:
            for key, val in exif_data.items():
                if key in ExifTags.TAGS:
                    # print(f'{ExifTags.TAGS[key]}:{val}')
                    converted_data[ExifTags.TAGS[key]] = val
                else:
                    print(f'{key}:{val}')
            return self._convert_GPS_to_decimal_from_exif(converted_data['GPSInfo'])

    def _convert_GPS_to_decimal_from_exif(self,data):
        """
        Helper function that takes exif data and reformats it to work with the function to convert degrees to decimal

        Parameters:
            data: a dictionary where 1 is the sign (N,S,E,W) of the lat, and 2 is the coordinates in degrees
                and 3,4 are the same for lon
        
        Returns
            A tuple with (Lat,lon) as floats
        """

        lat = self._convert_degrees_to_decimal(data[1],data[2])
        lon = self._convert_degrees_to_decimal(data[3],data[4])
        return (lat,lon)

    def _convert_degrees_to_decimal(self,sign,degrees):

        """
        Takes a coordinate in degrees and converts it to decimal
        Parameters
            sign: either N,S,E,W
            degrees: a tuple like so (Degrees,Minutes,Seconds)

        Returns A float with the degree coordinates
        """
        
        num = (degrees[0] + float(float(degrees[1]) / 60) + float(float(degrees[2])/ 3600 ))
        if (sign == 'S' or sign == 'W'):
            return -num
        else:
            return num
        
    def go(self):
        """  
        The starter function to scan through files and start the conversion to JSON
        """
        data = []
        for file_name in self._get_list_of_photos():
            this_photo = {}
            location = self._get_lat_lon_from_photo(self.import_path + '/' + file_name)
            this_photo["lat"] = location[0]
            this_photo["lot"] = location[1]
            this_photo["percent"] = self.mappify_at.calculatePercentage(location[0],location[1])
            this_photo["url"] = self.import_path + '/' + file_name
            data.append(this_photo)
        self._save_as_JSON(data)

    def _save_as_JSON(self,dict_data):
        """Saves a dictionary as JSON at the output
        Parameters:
            dict_data : the dictionary of data to be saved as a json
        
        """
        with open(self.except_path + '/' + "export.json",'w') as f:
            json.dump(dict_data, f, indent=4) # indent=4 for pretty-printing