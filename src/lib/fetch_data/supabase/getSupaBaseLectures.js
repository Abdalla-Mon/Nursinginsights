import { supabase } from "@/lib/supabaseConfig/supabaseConfig";

export default async function getSupaBaseLectures(
  tableName,
  columnName,
  courseId,
) {
  let query = supabase.from(tableName).select(columnName);
  query = query.filter(`${tableName}->>id`, "eq", courseId);

  let { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
