import React from 'react';
import classes from  './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
<div className={classes.content}>
  <div className={classes.item}>
    <div>
      <img src='https://pbs.twimg.com/profile_images/454263537435942912/qIj-SYJQ.jpeg'/>
    </div>
    <div>
      <div>
        Elvir Khanipov
      </div>
      <div>
        Perm
      </div>
      <div>
        08/07/1994
      </div>
    </div>
  </div>  
</div>
    
    )

}

export default ProfileInfo

