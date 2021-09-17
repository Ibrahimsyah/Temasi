import UserRepository from '../repositories/UserRepository';

class UserController {
  _userRepository: UserRepository;

  constructor(userRepository) {
    this._userRepository = userRepository;
  }

  getAllUserHandler = async (req, res) => {
    const result = await this._userRepository.getAllUser();
    console.log(result);
    res.json({
      success: true,
      message: 'U found get all user handler',
    });
  }
}

export default UserController;
