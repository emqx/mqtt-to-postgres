const store = {
  index: 0
}

function generator(faker, options) {
  const clientid = options.clientId

  function generateVehicleLocationData() {
    const vin = clientid
    const latitude = parseFloat(faker.address.latitude())
    const longitude = parseFloat(faker.address.longitude());
  
    return {
      vin,
      latitude,
      longitude
    };
  }

  if (!store[clientid]) {
    store.index += 1
  }

  const data = store[clientid]
  const message = { ...generateVehicleLocationData(), ...data, }
  return {
    message: JSON.stringify(message),
  }
}


const name = 'vehicle-location'
const author = 'EMQX Team'
const dataFormat = 'JSON'
const version = '0.0.1'
const description = 'vehicle location data generator'

module.exports = {
  generator,
  name,
  author,
  dataFormat,
  version,
  description,
}
