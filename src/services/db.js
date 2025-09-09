import Dexie from "dexie";

const db = new Dexie("AttendanceDB");
db.version(1).stores({
  attendance: "++id, className, studentName, timestamp"
});

export default db;
