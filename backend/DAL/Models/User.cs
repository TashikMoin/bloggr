using System.Collections.Generic;

namespace DAL.Models
{
    class User
    {
        public int User_Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        // 1 - M relation with naviagating properties
        public List<Blog> Blogs { get; set; }
    }
}
