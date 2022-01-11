var map = {
    title: "Flight",
    song: "env2",
    maker: "jaspko",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-4.99993, 10.00007, -44.999930000000006], [0, 0, 0], [10, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([8.00014, 10.00014, -44.99986], [0, 0, 0], [4, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([2.00021, 10.00021, -124.99978999999999], [0, 0, 0], [16, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([5.00028, 10.00028, -84.99972], [0, 0, 0], [10, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00035000000000000005, 16.00035, -164.99965], [0, 0, 0], [20, 8, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00042, 8.00042, -204.99957999999998], [0, 0, 0], [20, 8, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([3.0004899999999997, 10.00049, -244.99951000000001], [0, 0, 0], [14, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([-7, 15, -245], [0, 0, 0], [6, 10, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, 5.00007, -284.99993], [0, 0, 0], [20, 10, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 18.00014, -284.99986], [0, 0, 0], [20, 4, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00021, 3.00021, -324.99979], [0, 0, 0], [20, 4, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00028000000000000003, 16.00028, -324.99972], [0, 0, 0], [20, 8, 2], "1", 100000.0, 0, 0.6, false, false);
        a.p([0.00042, -0.01958, -199.99957999999998], [0, 0, 0], [20, 2, 400], "ffffff,0.1", 0, 0, 0.6, false, true);
        a.p([0.00049, 21.00049, -199.99951000000001], [0, 0, 0], [20, 2, 400], "ffffff,0.4", 0, 0, 0.6, false, false);
        a.p([-10, 10, -200], [0, 0, -1.57], [20, 2, 400], "ffffff,0.4", 0, 0, 0.6, false, false);
        a.p([10.00007, 10.00007, -199.99992999999998], [0, 0, -1.57], [20, 2, 400], "ffffff,0.4", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 10.00014, -199.99986], [0, 0, 0], [20, 22, 400], "-1.0", 0, 0, 0.6, true, true);
        a.p([0.00021, -0.15979, 0.00021], [0, 0, 0], [2, 0.32, 20], "1", 0, 0, 0.6, false, false);
        a.p([-7.99972, 10.00028, -84.99972], [0, 0, 0], [4, 20, 2], "1", 100000.0, 0, 0.6, false, false);
        a.e([0.00035000000000000005, 6.00035, -389.99965]);
        a.e([0.00042, 8.00042, -389.99958]);
        a.e([0.00049, 4.00049, -389.99951]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.3);
        cc.set_monkey("steer", default_steer * 1.0);
        cc.set_monkey("jumpSpeed", 2.6); // 0.8

        cc.set_monkey("jumpHeight", 1.1); // 1.0

        cc.set_monkey("gravity", new BABYLON.Vector3(null, -7.2, null));
        cc.set_monkey("player.scaling", new BABYLON.Vector3(null, 0.5, null));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-4.99993, 10.00007, -44.999930000000006], [0, 0, 0], [10, 20, 2]);
        a.re('P1', [8.00014, 10.00014, -44.99986], [0, 0, 0], [4, 20, 2]);
        a.re('P2', [2.00021, 10.00021, -124.99978999999999], [0, 0, 0], [16, 20, 2]);
        a.re('P3', [5.00028, 10.00028, -84.99972], [0, 0, 0], [10, 20, 2]);
        a.re('P4', [0.00035000000000000005, 16.00035, -164.99965], [0, 0, 0], [20, 8, 2]);
        a.re('P5', [0.00042, 8.00042, -204.99957999999998], [0, 0, 0], [20, 8, 2]);
        a.re('P6', [3.0004899999999997, 10.00049, -244.99951000000001], [0, 0, 0], [14, 20, 2]);
        a.re('P7', [-7, 15, -245], [0, 0, 0], [6, 10, 2]);
        a.re('P8', [0.00007000000000000001, 5.00007, -284.99993], [0, 0, 0], [20, 10, 2]);
        a.re('P9', [0.00014000000000000001, 18.00014, -284.99986], [0, 0, 0], [20, 4, 2]);
        a.re('P10', [0.00021, 3.00021, -324.99979], [0, 0, 0], [20, 4, 2]);
        a.re('P11', [0.00028000000000000003, 16.00028, -324.99972], [0, 0, 0], [20, 8, 2]);
        a.re('P12', [0.00042, -0.01958, -199.99957999999998], [0, 0, 0], [20, 2, 400]);
        a.re('P13', [0.00049, 21.00049, -199.99951000000001], [0, 0, 0], [20, 2, 400]);
        a.re('P14', [-10, 10, -200], [0, 0, -1.57], [20, 2, 400]);
        a.re('P15', [10.00007, 10.00007, -199.99992999999998], [0, 0, -1.57], [20, 2, 400]);
        a.re('P16', [0.00014000000000000001, 10.00014, -199.99986], [0, 0, 0], [20, 22, 400]);
        a.re('P17', [0.00021, -0.15979, 0.00021], [0, 0, 0], [2, 0.32, 20]);
        a.re('P18', [-7.99972, 10.00028, -84.99972], [0, 0, 0], [4, 20, 2]);
        a.re('E0', [0.00035000000000000005, 6.00035, -389.99965], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [0.00042, 8.00042, -389.99958], [0, 0, 0], [1, 1, 1]);
        a.re('E2', [0.00049, 4.00049, -389.99951], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
