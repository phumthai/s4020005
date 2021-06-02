# การเปิดหน้า Web บน server

1. เปิด cmd
2. ssh เข้าไปที่ serverB
3. sudo systemctl restart nginx
4. cd /home/cnoc/frontend/s4020005
5. node index.js

6. เปิด cmd อีกอัน ssh เข้าไปที่ serverC
7. ทำตามข้อ 3 - 5

8. เปิด cmd อีกอัน ssh เข้าไปที่ serverA
9. sudo systemctl restart nginx

10. เปิด web browser เข้า http://10.110.60.38:8000/
