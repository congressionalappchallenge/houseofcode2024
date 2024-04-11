import { Router } from 'express';
import { getAllLibraryRecords, updateLibraryRecord } from '../service/library.service';

export default () => {
  const router = Router();

  router.get('/library', getAllLibraryRecords);

  router.post('/district/:id', updateLibraryRecord);

  return router;
};
