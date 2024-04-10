import { Router } from 'express';
import { getAllLibraryRecords } from '../service/library.service';

export default () => {
  const router = Router();

  router.get('/library', getAllLibraryRecords);

  return router;
};
