import * as AV from "leancloud-storage";

export async function showData(type: string) {
  try {
    const query = new AV.Query("intro");
    query.equalTo("type", type);
    return (await query.find())[0].toJSON();
  } catch (e) {
    console.error(e);
  }
}

async function getInfo($type: string, $objectID?: string) {
  try {
    const query = new AV.Query($type);
    let data = [];
    if ($objectID) return (await query.get($objectID)).toJSON();
    else data = await query.find();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getProduct($objectID?: string) {
  const data = await getInfo("product", $objectID);
  console.log($objectID)
  if ($objectID) return data;
  return data.map(($data: any) => ({
    ...$data.toJSON(),
    url: $data.toJSON()["source"].url,
  }));
}

export async function getNews($objectID?: string) {
  const data = await getInfo("news", $objectID);
  if ($objectID) return data;
  return data.map(($data: any) => {
    return { ...$data.toJSON() };
  });
}

export async function getBanner() {
  const data = await getInfo("banner");
  return data.map(($data: any) => {
    return $data.toJSON()["source"].url;
  });
}

export async function getCaptcha() {
  return await AV.Captcha.request({
    width: 100, // 图片的宽度
    height: 50, // 图片的高度
  });
}

export async function postTry($data: API.portTryData) {
  try {
    const form = AV.Object.extend("formTry");
    const obj = new form();
    obj.set("name", $data.name);
    obj.set("phoneNumber", $data.phoneNumber);
    obj.set("flavor", $data.flavor);
    obj.set("address1", $data.address1);
    obj.set("address2", $data.address2);
    return await obj.save();
  } catch (e) {
    alert(e);
  }
}
