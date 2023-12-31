// Class for Scenario
class Scenario {
  constructor(data) {
    this.modVersion       = data.modVersion;
    this.scnGroup         = data.scnGroup  ;
    this.scnYear          = data.scnYear   ;
    this.scnDesc          = data.scnDesc   ;
    this.geoJsonSeg       = data.geoJsonSeg;
    this.scnFolder        = data.modVersion + '__' + data.scnGroup + '__' + String(data.scnYear);
    this.roadwaySegData   = null; // initialize to null for now
    this.zoneModeData     = null; // initialize to null for now
    this.zoneSeData       = null; // initialize to null for now
    this.roadwayTrendData = null; // initialize to null for now

    // fetch the data from the JSON file and set it to the roadwaySeg property
    // _site\data\scnData\v900__Base__2019\roadway-vizmap.json
    fetch('data/scnData/' + this.scnFolder + '/roadway-vizmap.json')
      .then(response => response.json())
      .then(jsonData => {
          this.roadwaySegData = new AttributeFilterData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));

    // fetch the data from the JSON file and set it to the roadwaySeg property
    // _site\data\scnData\v900__Base__2019\roadway-vizmap.json
    fetch('data/scnData/' + this.scnFolder + '/zones-modeshare-vizmap.json')
      .then(response => response.json())
      .then(jsonData => {
          this.zoneModeData = new AttributeFilterData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));

    // fetch the data from the JSON file and set it to the roadwaySeg property
    // _site\data\scnData\v900__Base__2019\roadway-trends.json
    fetch('data/scnData/' + this.scnFolder + '/roadway-trends.json')
      .then(response => response.json())
      .then(jsonData => {
          this.roadwayTrendData = new AttributeFilterData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));

    // fetch the data from the JSON file and set it to the roadwaySeg property
    // _site\data\scnData\v900__Base__2019\roadway-trends.json
    fetch('data/scnData/' + this.scnFolder + '/zones-se-vizmap.json')
      .then(response => response.json())
      .then(jsonData => {
          this.zoneSeData = new AttributeFilterData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));

    // fetch the data from the JSON file and set it to the roadwaySeg property
    // _site\data\scnData\v900__Base__2019\roadway-trends.json
    fetch('data/scnData/' + this.scnFolder + '/transit-segments-riders.json')
    .then(response => response.json())
    .then(jsonData => {
      this.transitSegData = new AttributeFilterData(jsonData);
    })
    .catch(error => console.error('Error fetching data:', error));

  }
}