let map : any;
let addresses : any[];
let mapMarkers : MapMarker[] = [];

interface LatLng{
	lat : number,
	lng : number,
}

class MapMarker{
	Address : string;
	LatLng : LatLng;
  	public constructor(address : string){
  	this.Address = address;
  	};
}

let Toronto : LatLng = {lat: 43, lng: -79.38};

$.ajax({
	url: './AClocations.json',
	dataType: 'json',
	success:function(data){

		addresses = data;
			for(let i of addresses){

				let newMapMarker : MapMarker = new MapMarker(i.address);
				mapMarkers.push(newMapMarker);
			}
		}
	}
});


function initMap(){
	map = new google.maps.Map(
		document.getElementById("map"),
		{
			center: Toronto,
			zoom: 8
		}
	);
}


//NEW PART TWO
function initMap

//Begin getLatLng
function getLatLng(address : string) : LatLng {
  //returns the lat and lng of an address using google maps
  let resultLatLng : LatLng = {lat:0, lng:0}
  }
