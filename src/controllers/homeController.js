import Aluno from '../models/Aluno.js';

class HomeControler {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      firstName: 'Maria',
      lastName: 'Braga',
      birth: '04/06/1995',
      email: 'jaquelinebraga01@gmail.com',
    });
    res.json(novoAluno);
  }
}

export default new HomeControler();
