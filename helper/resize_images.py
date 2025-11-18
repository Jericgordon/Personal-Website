from PIL import Image
from util import get_filenames_in_folder

class image_resizer():
    """
    converts an image to a max hight or width
    """
    def __init__(self,target_dir,source_dir,max_hight,max_width):
        """
        Parmeters
            target_dir: the directory to put the resized photos in
            source_dir: the directory from which the get pictures
            max_hight: the maximum hight in pixels desired || None
            max_width: the maximum Width in pixels desired || None
        """
        self.max_hight = max_hight
        self.max_width = max_width
        self.target_dir = target_dir
        self.source_dir = source_dir
        self.image_id = 1


    def go(self):
        """
        the function to start the resizing
        """
        for file_name in get_filenames_in_folder(self.source_dir):
            if (self.max_hight == None):
                self._resize_by_width(self.source_dir + '/' + file_name,file_name)
            else: 
                self._resize_by_hight(self.source_dir + '/' + file_name,file_name)

        

    def _resize_by_width(self,source,file_name):
        """
        resizes photo to be the same ratio, with at max the width set in the beginning

        Parmeters: 
            source: the path to the image
        """
        img = Image.open(source)
        width_percent = (self.max_width / float(img.size[0]))
        new_height = int(float(img.size[1]) * float(width_percent))
        resized_img = img.resize((self.max_width, new_height), Image.ANTIALIAS)
        resized_img.save(self.target_dir + '/' + str(self.image_id) + ".jpg")
        self.image_id += 1


    def _resize_by_hight(self,source,file_name):
        """
        resizes photo to be the same ratio, with at max the hight set in the beginning

        Parmeters: 
            source: the path to the image
        """
        img = Image.open(source)
        hight_percent = (self.max_hight / float(img.size[1]))
        new_width = int(float(img.size[0]) * float(hight_percent))
        resized_img = img.resize((new_width,self.max_hight), Image.ANTIALIAS)
        resized_img.save(self.target_dir + '/' + file_name)
        self.image_id += 1