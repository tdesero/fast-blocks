/* Note: this is currently no bundled */

class FastBlocksYoastContent {
  constructor() {
    if (typeof YoastSEO === "undefined" || typeof YoastSEO.app === "undefined") {
      return;
    }

    YoastSEO.app.registerPlugin("FastBlocksYoastContent", { status: "ready" });
    this.registerModifications();
  }

  registerModifications() {
    const callback = this.addContent.bind(this);
    YoastSEO.app.registerModification("content", callback, "FastBlocksYoastContent", 10);
  }
  
  async getRenderedContent(rawContent) {
    if (!rawContent) return;

    const response = await wp.apiFetch({
        path: '/_fast-blocks/v1/render-content/',
        method: 'POST',
        data: {
          content: rawContent
        }
    });

    const data = await response;
    this.renderedContent = data.rendered;
  
    console.log('fetched and now refreshes'); // Fully processed content
    YoastSEO.app.refresh();
  }

  addContent(data) {
    if (this.currentData !== data) {
      // if the data changed, fetch from rest api endpoint...
      this.getRenderedContent(data);
    }
    this.currentData = data;
    
    console.log('returns rendered content')
    return this.renderedContent ? this.renderedContent : data;
  }
}

if (typeof YoastSEO !== "undefined" && typeof YoastSEO.app !== "undefined") {
  new FastBlocksYoastContent();
} else {
  jQuery(window).on("YoastSEO:ready", function () {
    new FastBlocksYoastContent();
  });
}
