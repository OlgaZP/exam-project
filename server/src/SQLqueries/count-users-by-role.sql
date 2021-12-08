SELECT role, count(*) as count_members
FROM public."Users"
GROUP BY role
ORDER BY role;