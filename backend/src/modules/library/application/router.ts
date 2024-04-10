import { Router } from 'express';
import ICradle from '../../../IoC/icradle.interface';
import { getAllLibraryRecords } from '../service/library.service';

export default (cradle: ICradle) => {
  const router = Router();
  
  router.get('/library', getAllLibraryRecords);

  return router;
};
