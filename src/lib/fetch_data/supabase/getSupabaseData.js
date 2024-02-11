import { supabase } from "@/lib/supabaseConfig/supabaseConfig";

export default async function getSupabaseData(
  tableName,
  columnName,
  category,
  title,
) {
  let query = supabase.from(tableName).select(columnName);

  if (category) {
    query = query.filter(`${tableName}->>category`, "eq", category);
  }

  if (title) {
    query = query.filter(`${tableName}->>title`, "ilike", `%${title}%`);
  }

  let { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
