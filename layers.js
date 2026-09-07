var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DSM_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DSM<br />\
    <img src="styles/legend/DSM_1_0.png" /> -0.582<br />\
    <img src="styles/legend/DSM_1_1.png" /> 267.636<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DSM_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-363856.004772, 6564400.262766, -353005.790720, 6579365.661753]
        })
    });
var lyr_SlopeDegrees_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope (Degrees)<br />\
    <img src="styles/legend/SlopeDegrees_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/SlopeDegrees_2_1.png" /> 1.7073<br />\
    <img src="styles/legend/SlopeDegrees_2_2.png" /> 3.4146<br />\
    <img src="styles/legend/SlopeDegrees_2_3.png" /> 5.1220<br />\
    <img src="styles/legend/SlopeDegrees_2_4.png" /> 6.8293<br />\
    <img src="styles/legend/SlopeDegrees_2_5.png" /> 8.5366<br />\
    <img src="styles/legend/SlopeDegrees_2_6.png" /> 10.2439<br />\
    <img src="styles/legend/SlopeDegrees_2_7.png" /> 11.9513<br />\
    <img src="styles/legend/SlopeDegrees_2_8.png" /> 13.6586<br />\
    <img src="styles/legend/SlopeDegrees_2_9.png" /> 15.3659<br />\
    <img src="styles/legend/SlopeDegrees_2_10.png" /> 17.0732<br />\
    <img src="styles/legend/SlopeDegrees_2_11.png" /> 18.7805<br />\
    <img src="styles/legend/SlopeDegrees_2_12.png" /> 20.4878<br />\
    <img src="styles/legend/SlopeDegrees_2_13.png" /> 22.1952<br />\
    <img src="styles/legend/SlopeDegrees_2_14.png" /> 23.9025<br />\
    <img src="styles/legend/SlopeDegrees_2_15.png" /> 25.6098<br />\
    <img src="styles/legend/SlopeDegrees_2_16.png" /> 27.3171<br />\
    <img src="styles/legend/SlopeDegrees_2_17.png" /> 29.0244<br />\
    <img src="styles/legend/SlopeDegrees_2_18.png" /> 30.7318<br />\
    <img src="styles/legend/SlopeDegrees_2_19.png" /> 32.4391<br />\
    <img src="styles/legend/SlopeDegrees_2_20.png" /> 34.1464<br />\
    <img src="styles/legend/SlopeDegrees_2_21.png" /> 35.8538<br />\
    <img src="styles/legend/SlopeDegrees_2_22.png" /> 37.5611<br />\
    <img src="styles/legend/SlopeDegrees_2_23.png" /> 39.2684<br />\
    <img src="styles/legend/SlopeDegrees_2_24.png" /> 40.9757<br />\
    <img src="styles/legend/SlopeDegrees_2_25.png" /> 42.6830<br />\
    <img src="styles/legend/SlopeDegrees_2_26.png" /> 44.3904<br />\
    <img src="styles/legend/SlopeDegrees_2_27.png" /> 46.0977<br />\
    <img src="styles/legend/SlopeDegrees_2_28.png" /> 47.8050<br />\
    <img src="styles/legend/SlopeDegrees_2_29.png" /> 49.5123<br />\
    <img src="styles/legend/SlopeDegrees_2_30.png" /> 51.2196<br />\
    <img src="styles/legend/SlopeDegrees_2_31.png" /> 52.9269<br />\
    <img src="styles/legend/SlopeDegrees_2_32.png" /> 54.6343<br />\
    <img src="styles/legend/SlopeDegrees_2_33.png" /> 56.3416<br />\
    <img src="styles/legend/SlopeDegrees_2_34.png" /> 58.0489<br />\
    <img src="styles/legend/SlopeDegrees_2_35.png" /> 59.7563<br />\
    <img src="styles/legend/SlopeDegrees_2_36.png" /> 61.4635<br />\
    <img src="styles/legend/SlopeDegrees_2_37.png" /> 63.1709<br />\
    <img src="styles/legend/SlopeDegrees_2_38.png" /> 64.8782<br />\
    <img src="styles/legend/SlopeDegrees_2_39.png" /> 66.5855<br />\
    <img src="styles/legend/SlopeDegrees_2_40.png" /> 68.2929<br />\
    <img src="styles/legend/SlopeDegrees_2_41.png" /> 70.0002<br />\
    <img src="styles/legend/SlopeDegrees_2_42.png" /> 71.7075<br />\
    <img src="styles/legend/SlopeDegrees_2_43.png" /> 73.4148<br />\
    <img src="styles/legend/SlopeDegrees_2_44.png" /> 75.1221<br />\
    <img src="styles/legend/SlopeDegrees_2_45.png" /> 76.8295<br />\
    <img src="styles/legend/SlopeDegrees_2_46.png" /> 78.5368<br />\
    <img src="styles/legend/SlopeDegrees_2_47.png" /> 80.2441<br />\
    <img src="styles/legend/SlopeDegrees_2_48.png" /> 81.9514<br />\
    <img src="styles/legend/SlopeDegrees_2_49.png" /> 83.6587<br />\
    <img src="styles/legend/SlopeDegrees_2_50.png" /> 85.3660<br />\
    <img src="styles/legend/SlopeDegrees_2_51.png" /> 87.0734<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SlopeDegrees_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-363856.004772, 6564400.262766, -353005.790720, 6579365.661753]
        })
    });
var format_Bedrock_3 = new ol.format.GeoJSON();
var features_Bedrock_3 = format_Bedrock_3.readFeatures(json_Bedrock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bedrock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bedrock_3.addFeatures(features_Bedrock_3);
var lyr_Bedrock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bedrock_3, 
                style: style_Bedrock_3,
                popuplayertitle: 'Bedrock',
                interactive: false,
    title: 'Bedrock<br />\
    <img src="styles/legend/Bedrock_3_0.png" /> CHALK<br />\
    <img src="styles/legend/Bedrock_3_1.png" /> MUDSTONE<br />\
    <img src="styles/legend/Bedrock_3_2.png" /> MUDSTONE AND SANDSTONE, INTERBEDDED<br />\
    <img src="styles/legend/Bedrock_3_3.png" /> SANDSTONE<br />' });
var format_Landcover_4 = new ol.format.GeoJSON();
var features_Landcover_4 = format_Landcover_4.readFeatures(json_Landcover_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landcover_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landcover_4.addFeatures(features_Landcover_4);
var lyr_Landcover_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landcover_4, 
                style: style_Landcover_4,
                popuplayertitle: 'Landcover',
                interactive: false,
    title: 'Landcover<br />\
    <img src="styles/legend/Landcover_4_0.png" /> Broadleaved Woodland<br />\
    <img src="styles/legend/Landcover_4_1.png" /> Littoral Sediment<br />\
    <img src="styles/legend/Landcover_4_2.png" /> Coniferous Woodland<br />\
    <img src="styles/legend/Landcover_4_3.png" /> Urban<br />\
    <img src="styles/legend/Landcover_4_4.png" /> Suburban<br />\
    <img src="styles/legend/Landcover_4_5.png" /> Arable<br />\
    <img src="styles/legend/Landcover_4_6.png" /> Improved Grassland<br />\
    <img src="styles/legend/Landcover_4_7.png" /> Calcareous Grassland<br />\
    <img src="styles/legend/Landcover_4_8.png" /> Heather<br />' });
var format_SidNetwork_5 = new ol.format.GeoJSON();
var features_SidNetwork_5 = format_SidNetwork_5.readFeatures(json_SidNetwork_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SidNetwork_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SidNetwork_5.addFeatures(features_SidNetwork_5);
var lyr_SidNetwork_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SidNetwork_5, 
                style: style_SidNetwork_5,
                popuplayertitle: 'Sid Network',
                interactive: false,
                title: '<img src="styles/legend/SidNetwork_5.png" /> Sid Network'
            });
var format_ClearedBalsam_6 = new ol.format.GeoJSON();
var features_ClearedBalsam_6 = format_ClearedBalsam_6.readFeatures(json_ClearedBalsam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClearedBalsam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClearedBalsam_6.addFeatures(features_ClearedBalsam_6);
var lyr_ClearedBalsam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClearedBalsam_6, 
                style: style_ClearedBalsam_6,
                popuplayertitle: 'Cleared Balsam',
                interactive: false,
                title: '<img src="styles/legend/ClearedBalsam_6.png" /> Cleared Balsam'
            });
var format_Information_7 = new ol.format.GeoJSON();
var features_Information_7 = format_Information_7.readFeatures(json_Information_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Information_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Information_7.addFeatures(features_Information_7);
var lyr_Information_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Information_7, 
                style: style_Information_7,
                popuplayertitle: 'Information',
                interactive: true,
                title: '<img src="styles/legend/Information_7.png" /> Information'
            });
var format_CatchmentArea_8 = new ol.format.GeoJSON();
var features_CatchmentArea_8 = format_CatchmentArea_8.readFeatures(json_CatchmentArea_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatchmentArea_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatchmentArea_8.addFeatures(features_CatchmentArea_8);
var lyr_CatchmentArea_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatchmentArea_8, 
                style: style_CatchmentArea_8,
                popuplayertitle: 'Catchment Area',
                interactive: false,
                title: '<img src="styles/legend/CatchmentArea_8.png" /> Catchment Area'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DSM_1.setVisible(false);lyr_SlopeDegrees_2.setVisible(false);lyr_Bedrock_3.setVisible(false);lyr_Landcover_4.setVisible(false);lyr_SidNetwork_5.setVisible(true);lyr_ClearedBalsam_6.setVisible(true);lyr_Information_7.setVisible(true);lyr_CatchmentArea_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DSM_1,lyr_SlopeDegrees_2,lyr_Bedrock_3,lyr_Landcover_4,lyr_SidNetwork_5,lyr_ClearedBalsam_6,lyr_Information_7,lyr_CatchmentArea_8];
lyr_Bedrock_3.set('fieldAliases', {'fid': 'fid', 'LEX_WEB': 'LEX_WEB', 'LEX': 'LEX', 'LEX_D': 'LEX_D', 'LEX_RCS': 'LEX_RCS', 'RCS': 'RCS', 'RCS_X': 'RCS_X', 'RCS_D': 'RCS_D', 'RCS_ORIGIN': 'RCS_ORIGIN', 'RANK': 'RANK', 'BED_EQ_D': 'BED_EQ_D', 'MB_EQ_D': 'MB_EQ_D', 'FM_EQ_D': 'FM_EQ_D', 'SUBGP_EQ_D': 'SUBGP_EQ_D', 'GP_EQ_D': 'GP_EQ_D', 'SUPGP_EQ_D': 'SUPGP_EQ_D', 'MAX_TIME_Y': 'MAX_TIME_Y', 'MIN_TIME_Y': 'MIN_TIME_Y', 'MAX_AGE': 'MAX_AGE', 'MAX_EPOCH': 'MAX_EPOCH', 'MAX_SUBPER': 'MAX_SUBPER', 'MAX_PERIOD': 'MAX_PERIOD', 'MAX_ERA': 'MAX_ERA', 'MAX_EON': 'MAX_EON', 'BGSTYPE': 'BGSTYPE', 'LEX_RCS_I': 'LEX_RCS_I', 'LEX_RCS_D': 'LEX_RCS_D', 'BGSREF': 'BGSREF', 'MAP_SRC': 'MAP_SRC', 'MAP_WEB': 'MAP_WEB', 'VERSION': 'VERSION', 'RELEASED': 'RELEASED', 'NOM_SCALE': 'NOM_SCALE', 'NOM_BGS_YR': 'NOM_BGS_YR', 'UUID': 'UUID', });
lyr_Landcover_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '_conf': '_conf', '_hist': '_hist', '_mode': '_mode', '_n': '_n', '_purity': '_purity', '_stdev': '_stdev', '_agg': '_agg', 'gid': 'gid', });
lyr_SidNetwork_5.set('fieldAliases', {'fid': 'fid', 'arcgen_id': 'arcgen_id', });
lyr_ClearedBalsam_6.set('fieldAliases', {'id': 'id', });
lyr_Information_7.set('fieldAliases', {'id': 'id', 'Photograph': 'Photograph', 'Date': 'Date', 'Team Size': 'Team Size', 'Clearance%': 'Clearance%', });
lyr_CatchmentArea_8.set('fieldAliases', {'fid': 'fid', 'wb_id': 'wb_id', 'wb_name': 'wb_name', 'rbd_id': 'rbd_id', 'rbd_name': 'rbd_name', 'wb_cat': 'wb_cat', 'area_m2': 'area_m2', 'length_m': 'length_m', });
lyr_Bedrock_3.set('fieldImages', {'fid': 'TextEdit', 'LEX_WEB': 'TextEdit', 'LEX': 'TextEdit', 'LEX_D': 'TextEdit', 'LEX_RCS': 'TextEdit', 'RCS': 'TextEdit', 'RCS_X': 'TextEdit', 'RCS_D': 'TextEdit', 'RCS_ORIGIN': 'TextEdit', 'RANK': 'TextEdit', 'BED_EQ_D': 'TextEdit', 'MB_EQ_D': 'TextEdit', 'FM_EQ_D': 'TextEdit', 'SUBGP_EQ_D': 'TextEdit', 'GP_EQ_D': 'TextEdit', 'SUPGP_EQ_D': 'TextEdit', 'MAX_TIME_Y': 'TextEdit', 'MIN_TIME_Y': 'TextEdit', 'MAX_AGE': 'TextEdit', 'MAX_EPOCH': 'TextEdit', 'MAX_SUBPER': 'TextEdit', 'MAX_PERIOD': 'TextEdit', 'MAX_ERA': 'TextEdit', 'MAX_EON': 'TextEdit', 'BGSTYPE': 'TextEdit', 'LEX_RCS_I': 'TextEdit', 'LEX_RCS_D': 'TextEdit', 'BGSREF': 'Range', 'MAP_SRC': 'TextEdit', 'MAP_WEB': 'TextEdit', 'VERSION': 'TextEdit', 'RELEASED': 'TextEdit', 'NOM_SCALE': 'TextEdit', 'NOM_BGS_YR': 'TextEdit', 'UUID': 'TextEdit', });
lyr_Landcover_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '_conf': 'TextEdit', '_hist': 'TextEdit', '_mode': 'TextEdit', '_n': 'TextEdit', '_purity': 'TextEdit', '_stdev': 'TextEdit', '_agg': 'TextEdit', 'gid': 'TextEdit', });
lyr_SidNetwork_5.set('fieldImages', {'fid': 'TextEdit', 'arcgen_id': 'TextEdit', });
lyr_ClearedBalsam_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Information_7.set('fieldImages', {'id': 'TextEdit', 'Photograph': 'ExternalResource', 'Date': 'TextEdit', 'Team Size': 'TextEdit', 'Clearance%': 'TextEdit', });
lyr_CatchmentArea_8.set('fieldImages', {'fid': 'TextEdit', 'wb_id': 'TextEdit', 'wb_name': 'TextEdit', 'rbd_id': 'TextEdit', 'rbd_name': 'TextEdit', 'wb_cat': 'TextEdit', 'area_m2': 'TextEdit', 'length_m': 'TextEdit', });
lyr_Bedrock_3.set('fieldLabels', {'fid': 'no label', 'LEX_WEB': 'no label', 'LEX': 'no label', 'LEX_D': 'no label', 'LEX_RCS': 'no label', 'RCS': 'no label', 'RCS_X': 'no label', 'RCS_D': 'no label', 'RCS_ORIGIN': 'no label', 'RANK': 'no label', 'BED_EQ_D': 'no label', 'MB_EQ_D': 'no label', 'FM_EQ_D': 'no label', 'SUBGP_EQ_D': 'no label', 'GP_EQ_D': 'no label', 'SUPGP_EQ_D': 'no label', 'MAX_TIME_Y': 'no label', 'MIN_TIME_Y': 'no label', 'MAX_AGE': 'no label', 'MAX_EPOCH': 'no label', 'MAX_SUBPER': 'no label', 'MAX_PERIOD': 'no label', 'MAX_ERA': 'no label', 'MAX_EON': 'no label', 'BGSTYPE': 'no label', 'LEX_RCS_I': 'no label', 'LEX_RCS_D': 'no label', 'BGSREF': 'no label', 'MAP_SRC': 'no label', 'MAP_WEB': 'no label', 'VERSION': 'no label', 'RELEASED': 'no label', 'NOM_SCALE': 'no label', 'NOM_BGS_YR': 'no label', 'UUID': 'no label', });
lyr_Landcover_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '_conf': 'no label', '_hist': 'no label', '_mode': 'no label', '_n': 'no label', '_purity': 'no label', '_stdev': 'no label', '_agg': 'no label', 'gid': 'no label', });
lyr_SidNetwork_5.set('fieldLabels', {'fid': 'no label', 'arcgen_id': 'no label', });
lyr_ClearedBalsam_6.set('fieldLabels', {'id': 'no label', });
lyr_Information_7.set('fieldLabels', {'id': 'hidden field', 'Photograph': 'no label', 'Date': 'header label - visible with data', 'Team Size': 'header label - visible with data', 'Clearance%': 'header label - visible with data', });
lyr_CatchmentArea_8.set('fieldLabels', {'fid': 'no label', 'wb_id': 'no label', 'wb_name': 'no label', 'rbd_id': 'no label', 'rbd_name': 'no label', 'wb_cat': 'no label', 'area_m2': 'no label', 'length_m': 'no label', });
lyr_CatchmentArea_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});