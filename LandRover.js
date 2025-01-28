// Custom HTML Tag Script for GTM

// Static Pixels
(function() {
    // Partner 1 - iframe
    const partner1Iframe = document.createElement("iframe");
    partner1Iframe.src = "https://arabyads.g2afse.com/success.php?offer_id=21897&afstatus=1";
    partner1Iframe.width = "1";
    partner1Iframe.height = "1";
    partner1Iframe.style.display = "none";
    partner1Iframe.style.border = "none";
    document.body.appendChild(partner1Iframe);
    console.log("Partner 1 iframe loaded.");

    // Partner 2 - image pixel
    const partner2Img = document.createElement("img");
    partner2Img.src = "https://mm11007832.o18.link/p?m=23306&t=i&gb=1";
    partner2Img.width = 0;
    partner2Img.height = 0;
    partner2Img.style.display = "none";
    document.body.appendChild(partner2Img);
    console.log("Partner 2 image pixel loaded.");
})();

// Dynamic Pixels
(function() {
    const pixelConfigs = [
        // MM Pixel 1 - iframe
        {
            name: "MM Pixel 1",
            type: "iframe",
            id: "mm-pixel-1",
            src: "https://mm11007832.o18.link/p?m=23306&t=f&gb=1"
        },
        // MM Pixel 2 - image
        {
            name: "MM Pixel 2",
            type: "img",
            id: "mm-pixel-2",
            src: "https://mm11007832.o18.link/p?m=23306&t=i&gb=1"
        }
    ];

    pixelConfigs.forEach(pixel => {
        if (pixel.type === "iframe") {
            const iframe = document.createElement("iframe");
            iframe.id = pixel.id;
            iframe.src = pixel.src;
            iframe.width = "0px";
            iframe.height = "0px";
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            console.log(`${pixel.name} iframe loaded.`);
        } else if (pixel.type === "img") {
            const img = document.createElement("img");
            img.id = pixel.id;
            img.src = pixel.src;
            img.width = 0;
            img.height = 0;
            img.style.display = "none";
            document.body.appendChild(img);
            console.log(`${pixel.name} image pixel loaded.`);
        } else if (pixel.type === "script") {
            const script = document.createElement("script");
            script.id = pixel.id;
            script.src = pixel.src;
            script.async = true;
            script
