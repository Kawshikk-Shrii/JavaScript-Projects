# 📂 File Reader API – Beginner Friendly Explanation

### Overview
This project demonstrates how the JavaScript **FileReader API** is used to read files directly in the browser, without uploading them to any server. Everything happens on the **client side**.

### File Selection
The project uses HTML **file input elements** to allow users to select files from their local system. One input is used for text files, and another input is restricted to image files using the `accept="image/*"` attribute.

### Displaying Text Files
A `<pre>` element is used to display the content of a text file. This tag preserves spaces and line breaks, so the text appears exactly as it is in the original file.

### Displaying Image Files
An `<img>` element is used to preview image files. When an image is selected, it is displayed instantly on the webpage without any upload or page reload.

### Accessing Elements in JavaScript
JavaScript accesses the file input elements and output elements using `document.querySelector`. These references allow the selected files to be read and displayed dynamically.

### Detecting File Changes
The `change` event listener is attached to each file input. This event is triggered whenever the user selects a new file from the file picker.

### File Object
Once a file is selected, it is accessed using `input.files[0]`. This returns a **File object**, which contains information such as the file name, size, and type, but not the actual file content.

### FileReader API
To read the file content, a new **FileReader** object is created. The FileReader API is a built-in browser feature that reads file data in different formats.

### Reading Text Data
The `readAsText()` method is used for text-based files such as `.txt` or `.json`. After the file is read, the content becomes available as plain text.

### Reading Image Data
The `readAsDataURL()` method is mainly used for images. It converts the image into a **Base64 Data URL**, which can be directly assigned to the `src` attribute of an image tag for preview.

### Reading Binary Data
The `readAsArrayBuffer()` method is used for binary data. It is useful when working with files such as PDFs, audio files, videos, or other raw binary formats.

### Asynchronous Behavior
File reading using FileReader is **asynchronous**, meaning the file data is not available immediately after calling a read method.

### Accessing the Result
The `onload` event ensures that the file is fully read before accessing the data. The file content is available inside `FileReader.result` only after this event fires.

### Client-Side Processing
All file processing in this project happens entirely inside the browser. The files are never uploaded, saved, or sent to a backend server.

### Learning Outcome
This project helps beginners understand how **file inputs**, **File objects**, and the **FileReader API** work together and how these concepts are commonly used in real-world web applications.
