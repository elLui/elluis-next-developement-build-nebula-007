/**
 * @name generateUniqueId()
 * @summary create a random hash value
 *  - value is seperated into 3 sections: timestamp, random_pi, random_number;
 *  - timestamp: current timestamp value
 *  - random_pi: number between -2π and +2π
 *  - random_number: number between -32_000 and 64_000
 *
 *  * note: random_pi and random_number will can produce either positive or negative values
 *  * this will then create a variation in hash values with some containing 2x "-" values, 1x "-", or a "" return value
 * @returns {string}
 */
export default function generateUniqueId() {

	// current time stamp
	const timestamp = new Date().getTime();

	// generate random pi number Ensure that random_pi is within the range of -π to +π
	const random_pi = ( Math.random() * Math.PI * 2 ) - Math.PI; //
	// random number within range(-32_000, 64_000)
	const random_number = Math.floor( ( Math.random() * ( 64000 - ( -32000 ) ) ) + ( -32000 ) );



	return `${ timestamp }${ random_pi }${ random_number }`;
}

// to run this quick test you will need to remove 'default export' from the function instantiation call
console.log( generateUniqueId() );