import { createClient } from "@supabase/supabase-js";

import { Database } from "./supabase";

// Create a single supabase client for interacting with your database
const url = import.meta.env.VITE_SUPABASE_URL ?? ""; //Que si no existe simplemente dejalo vacio
const key = import.meta.env.VITE_SUPABASE_KEY ?? "";
const supabase = createClient<Database>(url, key);

const imageURL =
	"https://gqrmohepxukjyymsozua.supabase.co/storage/v1/object/public/images";

export { supabase as supabaseClient, imageURL };
