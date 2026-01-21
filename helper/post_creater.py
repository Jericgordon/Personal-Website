import re
#Creating posts is hard right now. It would be easier if I could compose in Google docs, drop in here, and hav it
#automatically export to the testsite.





def main():
    source = "helper/post_source/PocketProject 3.html"

    remove_list = ["<head>.*</head>"," class=\"[^>]*\"","<span[ ]*",\
                   "<span>","</span>","<html>","</html>","&nbsp;","<body>","</body>","<p>*</p>*"]

    source = fix_source(source)
    with(open(source) as file):
        text = file.read()
    text = re.sub("&#39;","\'",text)
    for pattern in remove_list:
        text = re.sub(pattern,"",text)
    
    # text = re.sub("><",">\n<",text)
    text = re.sub(">>",">",text)
    print(text)
    text_site = ""
    with(open("./helper/testsite.html","r") as file):
        text_site = file.read()
        text_site = re.sub("<div class=\"blog-container\">(\s*|.)*<\/div>","<div class=\"blog-container\">" + text + "</div>",text_site)
    #print(text_site)
    with(open("./helper/testsite.html","w") as file):
        file.write(text_site)

def fix_source(text:str):
    """Helper function so that I can just copy and paste the relative path without opening it every time."""
    return "./" + text

if __name__ == '__main__':
    main()