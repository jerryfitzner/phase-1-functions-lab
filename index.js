// Code your solution in this file!

function distanceFromHqInBlocks(block){
    if (block >= 42){
        return (block - 42)
    } else {
        return (42 - block)
    }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(feet){
    return (distanceFromHqInBlocks(feet) * 264)
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(block1,block2){
    if (block1 >= block2){
        return ((block1 - block2) * 264)
    }else if (block1 < block2){
        return ((block2 - block1) * 264)
    }
}

distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return (0)
    }else if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)){
        return ((distanceTravelledInFeet(start, destination)-400) * .02)
    }else if ((distanceTravelledInFeet(start, destination) >= 2000) && (distanceTravelledInFeet(start, destination) <= 2499)){
        return (25)
    }else {
        return 'cannot travel that far';
    }
}

calculatesFarePrice(distanceTravelledInFeet(43,44));
calculatesFarePrice(distanceTravelledInFeet(34,32));
calculatesFarePrice(distanceTravelledInFeet(50,58));
calculatesFarePrice(distanceTravelledInFeet(34,24));