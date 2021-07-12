export default async function transPostalCode ($address: [number, number, number]) {
  let cur_location = await require("@/config/location.json");
  let address_str: string = "";
  address_str += cur_location[$address[0]].name;
  cur_location = cur_location[$address[0]].cities;
  address_str += cur_location[$address[1]].name;
  cur_location = cur_location[$address[1]].districts;
  address_str += cur_location[$address[2]];
  return address_str;
}