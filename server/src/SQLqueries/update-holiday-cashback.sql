WITH total_sums AS (
	 SELECT u.id as user_id, sum(cnt.prize) as sum_prize 
	  FROM "Users" as u
	  INNER JOIN "Contests" as cnt
	  		ON u.id = cnt."userId"
	  WHERE role = 'customer' AND cnt."createdAt" BETWEEN '2020-12-25' AND '2021-01-14'
	  GROUP BY u.id)
UPDATE public."Users" AS u
SET balance = balance + total_sums.sum_prize * 0.1
FROM total_sums WHERE u.id = total_sums.user_id
RETURNING id, "displayName", role, balance;