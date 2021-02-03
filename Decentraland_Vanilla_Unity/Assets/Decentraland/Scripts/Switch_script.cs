using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Switch_script : MonoBehaviour
{
    public enum DoorBehavior { Close, Open, Toggle, CloseAndOpen };

    public DoorBehavior doorBehavior = DoorBehavior.Close;
    public Door_script[] doorsToClose;

    // Start is called before the first frame update
    void Start()
    {
        
    }

}
