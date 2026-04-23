export async function createUser(request, data) {
  const res = await request.post('/api/user', { data });
  return res.json();
}