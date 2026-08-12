import os

def get_filenames_in_folder(folder_path):
    """
    Retrieves a list of all filenames within a given folder.

    Args:
        folder_path (str): path to the folder.

    Returns:
        list: A list of strings, where each string is a filename in the folder.
              Returns an empty list if the folder does not exist or contains no files.

    Throws:
        File not found error: if it cannot find the file
        TypeError: if it's pointed to an object that's not a directory
    """

    if not os.path.exists(folder_path):
        raise FileNotFoundError(f"Folder not found at path {folder_path}")
     
    if not (os.path.isdir(folder_path)):
        raise TypeError(f"Object at path {folder_path} is not a path")

    filenames = []
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isfile(item_path):
            filenames.append(item)
    return filenames

