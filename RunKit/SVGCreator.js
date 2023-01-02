exports.endpoint = function (request, response)
{
    const { DOMImplementation, XMLSerializer } = require('xmldom');
    const xmlSerializer = new XMLSerializer();
    const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const rough = require('roughjs');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const rc = rough.svg(svg);
    var data = [[40, 20], [140, 30], [100, 130]]
    svg.appendChild(rc.polygon(data))
    let xml = xmlSerializer.serializeToString(svg);
    response.end(xml)
}
