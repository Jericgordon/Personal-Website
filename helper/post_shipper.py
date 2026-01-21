import json
import re
#takes whatever data is in testssite and exports it
id = 30
series_name = "ATMap"


def main():
    temp = {}
    temp["id"] = id
    temp["series_name"] = series_name
    temp["html"] = getHTML()
    write_json(temp)
    

def getHTML():
    with(open("./helper/testsite.html") as file):
        text = file.read()
        print
        pattern = r"<div class=\"blog-container\">((.*|\n)*)<[/]div>"
        #print(len("""<div class="blog-container">"""))
        match = re.findall(pattern,text)
        new_text = str(match[0])
        new_text = re.sub(r"\\n","",new_text)
        print(new_text)
    
        return new_text[6:len(match) -9]
    

def write_json(new_data, filename="./src/data/blogPosts.json"):
    with open(filename, 'r+') as file:
        # Load existing data into a dictionary
        file_data = json.load(file)
        
        # Append new data to the 'emp_details' list
        file_data.append(new_data)
        
        # Move the cursor to the beginning of the file
        file.seek(0)
        
        # Write the updated data back to the file
        json.dump(file_data, file, indent=4)


if __name__ == '__main__':
    main()