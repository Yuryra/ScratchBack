import express from "express";
import { 
    getRecords, 
    saveRecord,
    deleteRecords,
    testRecords,
} from "./DbComms.js";
 
const router = express.Router();

router.get('/test', testRecords);
router.get('/getRecords', getRecords);
router.post('/saveRecord', saveRecord);
router.post('/deleteRecords', deleteRecords);

// router.post('/users', saveUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;