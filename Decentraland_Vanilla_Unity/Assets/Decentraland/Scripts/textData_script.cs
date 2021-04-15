using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class textData_script : MonoBehaviour
{
    public string title;
    public string autor;
    public string owner = "";
    public string hoverText = "More info";
    [TextArea(15,60)]
    public string description = "";  
}
