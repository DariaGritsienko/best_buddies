class Progress{
  constructor(api){
    this.api = api;
  }
  update(email,amount){
    let info = {email, amount};
    this.api.postInfo(info);
  }
}

const progress = new Progress(api);
