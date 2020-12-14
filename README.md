# chrome-site-blocker
This is a google chrome extension and it allows you create your own extension to block the site that you want. 


# How to add extension to chrome

1. Open Chrome
2. Click on the 3 dots on top right side to get to the menu-item. 
3. More tools --> extensions.
4. Enable developer mode. 
5. Click on "Load unpacked" button
6. navigate to the folder where you downloaded the code from this repository. 
7. Modify the content.js script to add your own sites to block.


# How to add your sites to the block list
To add the sites in the block list, open the script content.js and add the URL in the main function. 
The main function looks like this. Add your own line findAllURL("https://www.youtube.com"); 

go = function main(){
	  //findAllURL("https://www.wikipedia.org/");
	  //findAllURL("https://www.youtube.com");
}
