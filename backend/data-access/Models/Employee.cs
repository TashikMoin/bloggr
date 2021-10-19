using System.ComponentModel.DataAnnotations;

namespace DataAccessLayer.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        /* 
         * [Key], [Required], [MaxLength], [Regular Expressions] etc are part of data annotations. 
         * Using these annotation we dont have to generate a ddl to make tables of our database. 
         * The entity framework core will do it automatically and write the code of a ddl like 
         * file by itself. This is called "code first approach" where the database does not even 
         * exist. We have one more approach which is "database first approach" where we have an 
         * existing database and using that database the entity framework core can generate the 
         * code for the model classes. It saves the time of the developer.
         * 
        */
    }
}
