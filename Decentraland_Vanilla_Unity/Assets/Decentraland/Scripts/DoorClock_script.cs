using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorClock_script : MonoBehaviour
{

    public enum DoorBehavior { Close, Open, Toggle, CloseAndOpen };

    public DoorBehavior doorBehavior = DoorBehavior.Toggle;
    public Door_script[] doorsToClose;
    public double time = 1;
    public bool loop = true;
    public bool autoActivate = false;
    public int maxLoops = 0;
}
