class HomeControler{
  index(req, res){
    res.json({
      "tudo_certo": true,
    })
  }
}

export default new HomeControler();
