"""Mapify contains the functions to convert any coordinates into a percent completion of the AT"""
class mappify_AT():  
    def __init__(self):
        self.atStart = (34.557761111111105, -84.24942222222222) #the geogrphic decimal coordinates of the start of the Applachian Trail in the format lon/lat
        self.atEnd = (45.90448611111111, -68.92149166666667) #the geogrphic decimal coordinates of the end of the Applachian Trail in the format lon/lat
        self.totalLatLength = self.atEnd[0] - self.atStart[0]
        self.totalLonLength = self.atEnd[1] - self.atStart[1]
    
    def calculatePercentage(self,lon,lat):
        """Takes the latitude and longitude and exports a coordinate. Returns -1 if not on the trail"""
        if (lon < self.atStart[0] - 1 or lon > self.atEnd[0] + 1):
            return -1
        
        if (lat < self.atStart[1] - 1 or lat > self.atEnd[1] + 1):
            return -1

        lonP = (lon - self.atStart[0]) / self.totalLatLength
        latP = (lat - self.atStart[1]) / self.totalLonLength

        return (lonP + latP) / 2
