import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

const form = document.getElementById('search-form')!;
const addressInput = document.getElementById('address') as HTMLInputElement;

// function seachAddressHandler(event: Event) {
// 	event.preventDefault();
// 	const enteredAddress = addressInput.value;
// }

declare var ol: any;

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

	document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
	new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM(),
			}),
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
			zoom: 16,
		}),
	});
}
