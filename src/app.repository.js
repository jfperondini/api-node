import AccountRepository from './repository/account.repository.js';
import UserRepository from './repository/user.repository.js';
import IdentitieRepository from './repository/identitie.repository.js';
import VerificationRepository from './repository/verification.respository.js';

function initRepositories() {
    AccountRepository.createTable();
    UserRepository.createTable();
    IdentitieRepository.createIdentitieTable();
    VerificationRepository.createTable();
}

export default initRepositories;