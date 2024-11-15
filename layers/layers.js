var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_viewer_Border_1 = new ol.format.GeoJSON();
var features_viewer_Border_1 = format_viewer_Border_1.readFeatures(json_viewer_Border_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Border_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Border_1.addFeatures(features_viewer_Border_1);
var lyr_viewer_Border_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Border_1, 
                style: style_viewer_Border_1,
                popuplayertitle: "viewer_Border",
                interactive: true,
                title: '<img src="styles/legend/viewer_Border_1.png" /> viewer_Border'
            });
var format_viewer_Pasture_CLC_dissolved_2 = new ol.format.GeoJSON();
var features_viewer_Pasture_CLC_dissolved_2 = format_viewer_Pasture_CLC_dissolved_2.readFeatures(json_viewer_Pasture_CLC_dissolved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Pasture_CLC_dissolved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Pasture_CLC_dissolved_2.addFeatures(features_viewer_Pasture_CLC_dissolved_2);
var lyr_viewer_Pasture_CLC_dissolved_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Pasture_CLC_dissolved_2, 
                style: style_viewer_Pasture_CLC_dissolved_2,
                popuplayertitle: "viewer_Pasture_CLC_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Pasture_CLC_dissolved_2.png" /> viewer_Pasture_CLC_dissolved'
            });
var format_viewer_Arable_dissolved_3 = new ol.format.GeoJSON();
var features_viewer_Arable_dissolved_3 = format_viewer_Arable_dissolved_3.readFeatures(json_viewer_Arable_dissolved_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Arable_dissolved_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Arable_dissolved_3.addFeatures(features_viewer_Arable_dissolved_3);
var lyr_viewer_Arable_dissolved_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Arable_dissolved_3, 
                style: style_viewer_Arable_dissolved_3,
                popuplayertitle: "viewer_Arable_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Arable_dissolved_3.png" /> viewer_Arable_dissolved'
            });
var format_viewer_Forest_dissolved_4 = new ol.format.GeoJSON();
var features_viewer_Forest_dissolved_4 = format_viewer_Forest_dissolved_4.readFeatures(json_viewer_Forest_dissolved_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Forest_dissolved_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Forest_dissolved_4.addFeatures(features_viewer_Forest_dissolved_4);
var lyr_viewer_Forest_dissolved_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Forest_dissolved_4, 
                style: style_viewer_Forest_dissolved_4,
                popuplayertitle: "viewer_Forest_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Forest_dissolved_4.png" /> viewer_Forest_dissolved'
            });
var format_viewer_Protection_dissolved_5 = new ol.format.GeoJSON();
var features_viewer_Protection_dissolved_5 = format_viewer_Protection_dissolved_5.readFeatures(json_viewer_Protection_dissolved_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_Protection_dissolved_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_Protection_dissolved_5.addFeatures(features_viewer_Protection_dissolved_5);
var lyr_viewer_Protection_dissolved_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_Protection_dissolved_5, 
                style: style_viewer_Protection_dissolved_5,
                popuplayertitle: "viewer_Protection_dissolved",
                interactive: true,
                title: '<img src="styles/legend/viewer_Protection_dissolved_5.png" /> viewer_Protection_dissolved'
            });
var format_viewer_GMPV06_6 = new ol.format.GeoJSON();
var features_viewer_GMPV06_6 = format_viewer_GMPV06_6.readFeatures(json_viewer_GMPV06_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viewer_GMPV06_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viewer_GMPV06_6.addFeatures(features_viewer_GMPV06_6);
var lyr_viewer_GMPV06_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viewer_GMPV06_6, 
                style: style_viewer_GMPV06_6,
                popuplayertitle: "viewer_GMPV0.6",
                interactive: true,
    title: 'viewer_GMPV0.6<br />\
    <img src="styles/legend/viewer_GMPV06_6_0.png" /> <br />\
    <img src="styles/legend/viewer_GMPV06_6_1.png" /> High Suita<br />\
    <img src="styles/legend/viewer_GMPV06_6_2.png" /> Low Suitab<br />\
    <img src="styles/legend/viewer_GMPV06_6_3.png" /> Medium Sui<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_viewer_Border_1.setVisible(true);lyr_viewer_Pasture_CLC_dissolved_2.setVisible(true);lyr_viewer_Arable_dissolved_3.setVisible(true);lyr_viewer_Forest_dissolved_4.setVisible(true);lyr_viewer_Protection_dissolved_5.setVisible(true);lyr_viewer_GMPV06_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_viewer_Border_1,lyr_viewer_Pasture_CLC_dissolved_2,lyr_viewer_Arable_dissolved_3,lyr_viewer_Forest_dissolved_4,lyr_viewer_Protection_dissolved_5,lyr_viewer_GMPV06_6];
lyr_viewer_Border_1.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', });
lyr_viewer_Pasture_CLC_dissolved_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', });
lyr_viewer_Arable_dissolved_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', });
lyr_viewer_Forest_dissolved_4.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', });
lyr_viewer_Protection_dissolved_5.set('fieldAliases', {'SITENAME': 'SITENAME', });
lyr_viewer_GMPV06_6.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'Area_ha': 'Area_ha', 'Suitabilit': 'Suitabilit', });
lyr_viewer_Border_1.set('fieldImages', {'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', });
lyr_viewer_Pasture_CLC_dissolved_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', });
lyr_viewer_Arable_dissolved_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', });
lyr_viewer_Forest_dissolved_4.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', });
lyr_viewer_Protection_dissolved_5.set('fieldImages', {'SITENAME': 'TextEdit', });
lyr_viewer_GMPV06_6.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', 'Area_ha': 'TextEdit', 'Suitabilit': 'TextEdit', });
lyr_viewer_Border_1.set('fieldLabels', {'NAME_0': 'inline label - visible with data', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', });
lyr_viewer_Pasture_CLC_dissolved_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'no label', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', });
lyr_viewer_Arable_dissolved_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'inline label - always visible', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', });
lyr_viewer_Forest_dissolved_4.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'no label', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', });
lyr_viewer_Protection_dissolved_5.set('fieldLabels', {'SITENAME': 'no label', });
lyr_viewer_GMPV06_6.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'Area_ha': 'inline label - always visible', 'Suitabilit': 'header label - always visible', });
lyr_viewer_GMPV06_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});