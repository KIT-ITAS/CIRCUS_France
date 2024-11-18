var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pasture_CLC_2 = new ol.format.GeoJSON();
var features_Pasture_CLC_2 = format_Pasture_CLC_2.readFeatures(json_Pasture_CLC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasture_CLC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasture_CLC_2.addFeatures(features_Pasture_CLC_2);
var lyr_Pasture_CLC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasture_CLC_2, 
                style: style_Pasture_CLC_2,
                popuplayertitle: "Pasture_CLC",
                interactive: true,
                title: '<img src="styles/legend/Pasture_CLC_2.png" /> Pasture_CLC'
            });
var format_Arable_CLC_3 = new ol.format.GeoJSON();
var features_Arable_CLC_3 = format_Arable_CLC_3.readFeatures(json_Arable_CLC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arable_CLC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arable_CLC_3.addFeatures(features_Arable_CLC_3);
var lyr_Arable_CLC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arable_CLC_3, 
                style: style_Arable_CLC_3,
                popuplayertitle: "Arable_CLC",
                interactive: true,
                title: '<img src="styles/legend/Arable_CLC_3.png" /> Arable_CLC'
            });
var format_Forest_CLC_4 = new ol.format.GeoJSON();
var features_Forest_CLC_4 = format_Forest_CLC_4.readFeatures(json_Forest_CLC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_CLC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_CLC_4.addFeatures(features_Forest_CLC_4);
var lyr_Forest_CLC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_CLC_4, 
                style: style_Forest_CLC_4,
                popuplayertitle: "Forest_CLC",
                interactive: true,
                title: '<img src="styles/legend/Forest_CLC_4.png" /> Forest_CLC'
            });
var format_Protectionareas_5 = new ol.format.GeoJSON();
var features_Protectionareas_5 = format_Protectionareas_5.readFeatures(json_Protectionareas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protectionareas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protectionareas_5.addFeatures(features_Protectionareas_5);
var lyr_Protectionareas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protectionareas_5, 
                style: style_Protectionareas_5,
                popuplayertitle: "Protection areas",
                interactive: true,
                title: '<img src="styles/legend/Protectionareas_5.png" /> Protection areas'
            });
var format_Government_PV_Potential_greater_05_6 = new ol.format.GeoJSON();
var features_Government_PV_Potential_greater_05_6 = format_Government_PV_Potential_greater_05_6.readFeatures(json_Government_PV_Potential_greater_05_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Government_PV_Potential_greater_05_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Government_PV_Potential_greater_05_6.addFeatures(features_Government_PV_Potential_greater_05_6);
var lyr_Government_PV_Potential_greater_05_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Government_PV_Potential_greater_05_6, 
                style: style_Government_PV_Potential_greater_05_6,
                popuplayertitle: "Government_PV_Potential_greater_0.5",
                interactive: true,
    title: 'Government_PV_Potential_greater_0.5<br />\
    <img src="styles/legend/Government_PV_Potential_greater_05_6_0.png" /> Potentiellement favorable<br />\
    <img src="styles/legend/Government_PV_Potential_greater_05_6_1.png" /> Potentiellement très favorable<br />\
    <img src="styles/legend/Government_PV_Potential_greater_05_6_2.png" /> <br />'
        });
var format_GMPVgreaterThan06ha_7 = new ol.format.GeoJSON();
var features_GMPVgreaterThan06ha_7 = format_GMPVgreaterThan06ha_7.readFeatures(json_GMPVgreaterThan06ha_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GMPVgreaterThan06ha_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GMPVgreaterThan06ha_7.addFeatures(features_GMPVgreaterThan06ha_7);
var lyr_GMPVgreaterThan06ha_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GMPVgreaterThan06ha_7, 
                style: style_GMPVgreaterThan06ha_7,
                popuplayertitle: "GMPVgreaterThan0.6ha",
                interactive: true,
    title: 'GMPVgreaterThan0.6ha<br />\
    <img src="styles/legend/GMPVgreaterThan06ha_7_0.png" /> High Suita<br />\
    <img src="styles/legend/GMPVgreaterThan06ha_7_1.png" /> Low Suitab<br />\
    <img src="styles/legend/GMPVgreaterThan06ha_7_2.png" /> Medium Sui<br />\
    <img src="styles/legend/GMPVgreaterThan06ha_7_3.png" /> <br />'
        });
var format_Border_8 = new ol.format.GeoJSON();
var features_Border_8 = format_Border_8.readFeatures(json_Border_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_8.addFeatures(features_Border_8);
var lyr_Border_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Border_8, 
                style: style_Border_8,
                popuplayertitle: "Border",
                interactive: true,
                title: '<img src="styles/legend/Border_8.png" /> Border'
            });

lyr_ESRISatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Pasture_CLC_2.setVisible(false);lyr_Arable_CLC_3.setVisible(false);lyr_Forest_CLC_4.setVisible(false);lyr_Protectionareas_5.setVisible(false);lyr_Government_PV_Potential_greater_05_6.setVisible(false);lyr_GMPVgreaterThan06ha_7.setVisible(true);lyr_Border_8.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_Pasture_CLC_2,lyr_Arable_CLC_3,lyr_Forest_CLC_4,lyr_Protectionareas_5,lyr_Government_PV_Potential_greater_05_6,lyr_GMPVgreaterThan06ha_7,lyr_Border_8];
lyr_Pasture_CLC_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', 'Pasture': 'Pasture', });
lyr_Arable_CLC_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', 'Arable': 'Arable', });
lyr_Forest_CLC_4.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'code_18': 'code_18', 'remark': 'remark', 'area_ha': 'area_ha', 'id': 'id', 'Forest': 'Forest', });
lyr_Protectionareas_5.set('fieldAliases', {'SITENAME': 'SITENAME', });
lyr_Government_PV_Potential_greater_05_6.set('fieldAliases', {'fid_1': 'fid_1', 'objectid': 'objectid', 'classe': 'classe', 'region': 'region', 'Area': 'Area', });
lyr_GMPVgreaterThan06ha_7.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'Area_ha': 'Area_ha', 'Suitabilit': 'Suitabilit', });
lyr_Border_8.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', });
lyr_Pasture_CLC_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', 'Pasture': '', });
lyr_Arable_CLC_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', 'Arable': '', });
lyr_Forest_CLC_4.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'code_18': 'TextEdit', 'remark': 'TextEdit', 'area_ha': 'TextEdit', 'id': 'TextEdit', 'Forest': '', });
lyr_Protectionareas_5.set('fieldImages', {'SITENAME': 'TextEdit', });
lyr_Government_PV_Potential_greater_05_6.set('fieldImages', {'fid_1': 'TextEdit', 'objectid': 'TextEdit', 'classe': 'TextEdit', 'region': 'TextEdit', 'Area': 'TextEdit', });
lyr_GMPVgreaterThan06ha_7.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', 'Area_ha': 'TextEdit', 'Suitabilit': 'TextEdit', });
lyr_Border_8.set('fieldImages', {'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', });
lyr_Pasture_CLC_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'no label', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', 'Pasture': 'no label', });
lyr_Arable_CLC_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'inline label - always visible', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', 'Arable': 'no label', });
lyr_Forest_CLC_4.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'code_18': 'no label', 'remark': 'hidden field', 'area_ha': 'hidden field', 'id': 'hidden field', 'Forest': 'no label', });
lyr_Protectionareas_5.set('fieldLabels', {'SITENAME': 'inline label - always visible', });
lyr_Government_PV_Potential_greater_05_6.set('fieldLabels', {'fid_1': 'hidden field', 'objectid': 'hidden field', 'classe': 'header label - always visible', 'region': 'hidden field', 'Area': 'hidden field', });
lyr_GMPVgreaterThan06ha_7.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'Area_ha': 'inline label - always visible', 'Suitabilit': 'inline label - always visible', });
lyr_Border_8.set('fieldLabels', {'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'NAME_3': 'inline label - visible with data', });
lyr_Border_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});