import {getDatabase, push, ref, set} from "@firebase/database";
import {app} from "~/config/firebase";

export const submitInquiry = async (data: any) => {
  try {
    const db = getDatabase(app);
    const formRef = push(ref(db, "inquiries"));
    await set(formRef, {
      ...data,
      created_at: new Date().toISOString(),
    });

    return {success: true};
  } catch (e) {
    console.error("Failed to submit inquiry:", e);
    return {success: false, error: e};
  }
};
