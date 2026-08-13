# Particles

Boss supports ambient particle effects around your Bosses. Each Boss can have its own particle configuration with 8 different animation shapes.

## Configuring Particles

Open `/boss menu` > click on your Boss > Settings > **Particles**.

Turn **Enabled** on, pick a **Particle Type**, choose a **Shape Pattern**, then tune the rest under **Settings**. Particles stay off until you enable them.

## Shapes

| Shape | Description |
|-------|-------------|
| Ambient Cloud | Particles randomly spread around the Boss |
| Circle | Particles orbit in a flat circle around the Boss |
| Helix | Particles spiral upward around the Boss |
| Vortex | An expanding rising spiral around the Boss |
| Sphere | Particles cover a sphere around the Boss |
| Tornado | A funnel of particles widening upward |
| Wings | Butterfly-shaped wings around the Boss |
| Cube | A rotating wireframe cube around the Boss |

## Settings

| Setting | Description | Default | Range |
|---------|-------------|---------|-------|
| Enabled | Whether this Boss shows particles at all | off | on/off |
| Particle Type | The Minecraft particle to use | none | any available particle |
| Shape Pattern | Animation shape from the table above | Ambient Cloud | 8 shapes |
| Count | Particles per cycle | 20 | 1-100 |
| Speed | Particle movement speed | 0.01 | 0.0-5.0 |
| Interval | Cycles between spawns, 10 is about once a second | 2 | 1-200 |
| Spread | How far particles scatter (Ambient Cloud only) | 0.3 / 0.5 / 0.3 | 0.0-5.0 |
| Radius | Size of the shape (every other shape) | 1.0 | 0.1-10.0 |
| Height | Vertical extent (Helix, Vortex, Tornado only) | 2.0 | 0.5-10.0 |
| Strands | Number of spiral arms (Helix, Vortex only) | 3 | 1-8 |
| Forward Offset | Shift the effect along the Boss's facing direction. Negative values move it behind the Boss | 0.0 | -5.0 to 5.0 |

## YAML Example

Particle settings are stored per-Boss in their YAML file under the `Particle` key:

```yaml
Particle:
  Enabled: true
  Type: FLAME
  Shape: HELIX
  Count: 20
  Offset_X: 0.3
  Offset_Y: 0.5
  Offset_Z: 0.3
  Speed: 0.01
  Interval_Ticks: 2
  Radius: 1.0
  Height: 2.0
  Strands: 3
  Forward_Offset: 0.0
```

Set `Enabled` to `false` to turn particles off for a Boss.
