import re
#Creating posts is hard right now. It would be easier if I could compose in Google docs, drop in here, and hav it
#automatically export to the testsite.





def main():
    source = "helper/post_source/PocketProject.html"

    remove_list = ["<head>.*</head>"," class=\"[^>]*\"","<span[ ]*",\
                   "<span>","</span>","<br>","<html>","</html>","&nbsp;","<body>","</body>","<p>*</p>*"]

    source = fix_source(source)
    with(open(source) as file):
        text = file.read()
    text = re.sub("&#39;","\'",text)
    for pattern in remove_list:
        text = re.sub(pattern,"",text)
    
    # text = re.sub("><",">\n<",text)
    text = re.sub(">>",">",text)
    with(open("./helper/testsite.html","r+") as file):
        text_site = file.read()
        text_site = re.sub("<div class=\"blog-container\">.*</div>","<div class=\"blog-container\">" + text + "</div>",text_site,1)
        file.seek(0)
        file.write(text_site)
        file.truncate()


def fix_source(text:str):
    """Helper function so that I can just copy and paste the relative path without opening it every time."""
    return "./" + text

if __name__ == '__main__':
    main()