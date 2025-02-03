(function() {
    // Create the first iframe for the Land Rover pixel
    var iframe1 = document.createElement('iframe');
    iframe1.src = 'https://track.trackingfinder.com/success.php?offer_id=21897&afstatus=1';
    iframe1.height = '1';
    iframe1.width = '1';
    iframe1.style.display = 'none'; // Hide the iframe

    // Create the second iframe for the new pixel
    var iframe2 = document.createElement('iframe');
    iframe2.src = 'https://mm11007832.o18.link/p?m=23306&t=f&gb=1';
    iframe2.width = '0px';
    iframe2.height = '0px';
    iframe2.style.display = 'none'; // Hide the iframe

    // Append both iframes to the document
    document.head.appendChild(iframe1);
    document.head.appendChild(iframe2);
})();
