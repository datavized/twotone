import * as musicMetadata from 'music-metadata-browser';
import { imageMimeTypeRegex, fileExt } from '../regex';

const keepTags = ['title', 'artist', 'album', 'genre', 'track', 'year'];

async function getAudioMetadata(file) {
	const _metadata = await musicMetadata.parseBlob(file);

	const { picture } = _metadata.common.picture && _metadata.common.picture.length > 0 ? _metadata.common.picture[0] : null;
	const metadata = {};

	Object.keys(metadata.common).forEach(key => {
		if (keepTags.indexOf(key) >= 0) {
			metadata[key] = metadata.common[key];
		} else if (typeof metadata.common[key] === 'string') {
			metadata[key] = metadata.common[key].trim();
		}
	});
	metadata.title = metadata.common.track;

	if (!metadata.title) {
		metadata.title = file.name.replace(fileExt, '');
	}

	const mediaInfo = {
		metadata,
		attachments: {
			audio: file
		}
	};

	/*
	This might be better as a base64 dataURI, since it's a bit smaller.
	Look into it.

	todo:
	- save picture at different resolutions
	- let medium plugin handle this
	  - audio: get from metadata tags and resize
	*/
	if (picture && picture.data) {
		const pictureData = new Uint8Array(picture.data);
		mediaInfo.attachments.picture = new Blob([pictureData], { type: picture.format }); // todo: array
	}

	return mediaInfo;
}

self.addEventListener('message', event => {
	if (event.data.file) {
		getAudioMetadata(event.data.file).then(mediaInfo => {
			self.postMessage(mediaInfo);
		});
	}
});
