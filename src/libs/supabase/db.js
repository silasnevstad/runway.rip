import { supabase } from "./config";

export async function fetchData(table, columns = "*", filters = {}) {
    let query = supabase.from(table).select(columns);
    Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
    });
    return query;
}

export async function insertData(table, values) {
    return supabase.from(table).insert(values);
}

export async function updateData(table, values, filters = {}) {
    let query = supabase.from(table).update(values);
    Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
    });
    return query;
}

export async function upsertData(table, values) {
    return supabase.from(table).upsert(values).select();
}

export async function deleteData(table, filters = {}) {
    let query = supabase.from(table).delete();
    Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
    });
    return query;
}

export async function callFunction(functionName, args = {}) {
    return supabase.rpc(functionName, args);
}

// addLead adds a new lead to the leads table (for waiting list)
export async function addLead(email) {
    // You could also use your generic insertData() if preferred:
    const { data, error } = await supabase.from('leads').insert({ email });
    if (error) {
        console.error("Error inserting lead:", error);
        throw new Error(error.message);
    }
    return data;
}
