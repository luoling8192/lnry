declare namespace API {
  type postTryData = {
    name: string;
    phoneNumber: number;
    flavor: string;
    address1: string;
    address2?: string;
  };

  type postJoinData = {
    name: string;
    phoneNumber: number;
    job: string;
    address1: string;
    address2?: string;
  };
}
