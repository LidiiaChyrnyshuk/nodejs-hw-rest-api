const Jimp = require("jimp");

const resizeAvatarImg = async (pathToImage) => {
	const image = await Jimp.read(pathToImage);
	await image.resize(250, 250);
	await image.writeAsync(pathToImage);
};

module.exports = resizeAvatarImg;
